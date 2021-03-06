import { Items  } from '../types/Items';

export const getCurrentMonth = () => {
	let now = new Date();
	return `${now.getFullYear()}-${now.getMonth()+1}`;
};

export const filterListByMonth = (list: Items[], date:string): Items[] => {
	let newList: Items[] = [];
	let [year, month] = date.split('-');

	for(let i in list) {
		if(list[i].date.getFullYear() === parseInt(year) &&
		  (list[i].date.getMonth() + 1) === parseInt(month)
		){
			newList.push(list[i]);
		}
	}

	return newList;
};

export const  formatDate = (date:Date): string => {
     let year = date.getFullYear();
     let month = date.getMonth() + 1;
     let day = date.getDate();

     return `${day}/${month}/${year}`;
}
