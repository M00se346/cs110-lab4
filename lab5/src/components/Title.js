import React, {useState, useEffect} from 'react'

const Title = ({term1, term2}) => {
  
  const [capitalizedTerm1, setCapitalizedTerm1] = useState('');
  const [term2Text, setTerm2Text] = useState('');

  // Effect to update derived values when term1 or term2 changes
  useEffect(() => {
      // Capitalize the first letter of term1
      const newCapitalizedTerm1 = term1.charAt(0).toUpperCase() + term1.slice(1);
      setCapitalizedTerm1(newCapitalizedTerm1);

      // Map '1' to 'day' in term2
      const newTerm2 = term2 === '1' ? 'day' : term2 === '7' ? 'week' : term2 === '30' ? 'month' : '';
      setTerm2Text(newTerm2);

  }, [term1, term2]); 



    return (
    <div>
      <h2>{term2} - {capitalizedTerm1}</h2>
    </div>
  )
}

export default Title
