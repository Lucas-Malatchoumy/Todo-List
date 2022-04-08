import uniqid from 'uniqid';

const DataTask = [
    {
        'id': uniqid(),
        'name': 'test',
        'status': 'todo'
    },
    {
        'id': uniqid(),
        'name': 'manger',
        'status': 'todo'
    }
]

export function getTasks() {
    return DataTask;
}