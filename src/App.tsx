import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Items  } from './types/Items';
import { Category  } from './types/Category';
import { categories  } from './data/categories';
import { items  } from './data/items';
import { getCurrentMonth, filterListByMonth  } from './helpers/DateFilter'
import { TableArea } from './components/TableArea';

function App() {
  const [list, setList] = useState(items);
  const [filteredList, setfilteredList] = useState<Items[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);

  useEffect(()=>{
	setfilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <div className="App">
      <C.Container>
      	<C.Header>
      		<C.HeaderText>
      		  Sistema de Despesas
      		</C.HeaderText>
      	</C.Header>
      	<C.Body>
      	   {/* Área de informações */}

      	   {/* Área de inserção */}

      	   <TableArea list={filteredList}/>

      	</C.Body>
      </C.Container>
    </div>
  );
}

export default App;
