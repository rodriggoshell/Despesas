import * as C from './styles';
import { Items } from '../../types/Items'
import { formatDate  }  from '../../helpers/DateFilter';

type Props = {
	item: Items;
}

export const TableItem = ({ item  }: Props) => {
	return(
		<C.TableLine>
			<C.TableColor>{formatDate(item.date)}</C.TableColor>
			<C.TableColor>{item.category}</C.TableColor>
			<C.TableColor>{item.title}</C.TableColor>
			<C.TableColor>R$ {item.value}</C.TableColor>
		</C.TableLine>
	);
}