import React, {useState, useEffect} from 'react'

const Title = ({term1, term2}) => {
  
  const [capitalizedTerm2, setCapitalizedTerm2] = useState('');
  const [term1Text, setTerm1Text] = useState('');

  // Effect to update derived values when term1 or term2 changes
  useEffect(() => {
      // Capitalize the first letter of term1
      const newCapitalizedTerm2 = term2.charAt(0).toUpperCase() + term2.slice(1);
      setCapitalizedTerm2(newCapitalizedTerm2);

      // Map '1' to 'day' in term2
      const newTerm1 = term1 === '1' ? 'Day' : term1 === '7' ? 'Week' : term1 === '30' ? 'Month' : '';
      setTerm1Text(newTerm1);

  }, [term1, term2]); 



    return (
    <div>
      <h2>{term1Text} - {capitalizedTerm2}</h2>
    </div>
  )
}

export default Title
