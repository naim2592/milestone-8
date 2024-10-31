import { LineChart as LChart, Line , XAxis, YAxis  } from 'recharts';

const Linechart = () => {
    const mathData= [
        { "id": 1, "name": "Alice", "math": 78,'physics':65 },
        { "id": 2, "name": "Bob", "math": 85,'physics':56 },
        { "id": 3, "name": "Charlie", "math": 92,'physics': 85},
        { "id": 4, "name": "David", "math": 67,'physics':98 },
        { "id": 5, "name": "Eva", "math": 88,'physics':57 },
        { "id": 6, "name": "Frank", "math": 73,'physics':40 },
        { "id": 7, "name": "Grace", "math": 90,'physics':78 },
        { "id": 8, "name": "Hannah", "math": 82,'physics': 83},
        { "id": 9, "name": "Ian", "math": 95,'physics': 95},
        { "id": 10, "name": "Jack", "math": 76,'physics': 67}
    ]
    
    return (
        <div>
            <LChart width={500} height={400} data={mathData}>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics"></Line>
                <XAxis dataKey={'name'}/>
                <YAxis/>
            </LChart>
        </div>
    );
};

export default Linechart;