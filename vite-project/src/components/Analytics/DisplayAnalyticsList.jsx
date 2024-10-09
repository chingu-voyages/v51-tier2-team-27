import BarChart from './BarChart';

export default function DisplayAnalyticsList({ navSelect, groupsData }) {
  if (navSelect === 'analytics') {
  
    const labels = groupsData.map(group => group.groupName);
    const data = groupsData.map(group => parseFloat(group.groupBudget) || 0);

    return (
      <div className='col-span-5 p-10'>
        <BarChart labels={labels} data={data} />
      </div>
    );
  }

  return null; 
}