import * as C  from './styles';
import { Items } from '../../types/Items';
import { TableItem } from '../TableItem';

type Props = {
	list:Items[]
}

export const TableArea = ({ list }: Props) =>{
	return(
		<C.Table>
			<thead>
				<tr>
					<C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
					<C.TableHeadColumn  width={130}>Setor</C.TableHeadColumn>
					<C.TableHeadColumn>Título</C.TableHeadColumn>
					<C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
				</tr>
			</thead>

			<tbody>
			  { list.map((item,index)=>(
			  	<TableItem key={index} item={item} />
			  ))}
			</tbody>
		</C.Table>
	);
}