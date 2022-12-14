import { List, Switch } from 'antd';

export default function TodoListCard({ item, setError, setLoading, setTasklist }) {
    const handleSwitch = () => {
        setLoading(true);
    const body = { done: !item.done }
    fetch(`http://localhost:5555/tasks/${item.id}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
})
    .then(response => response.json())
    .then(data => {
        setTasklist(data);
        setError('');
        setLoading(false);
    })
    .catch(err => {
        setError(err.message);
        setLoading(false);
    });
}
return (
<List.Item key={item.id}>
<List.Item.Meta
  avatar={<Switch 
      onChange={() => handleSwitch()}
      checked={item.done} 
      />}
  title={<p>{item.task}</p>}
/>
</List.Item>
)
}