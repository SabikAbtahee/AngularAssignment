// import { DataSource } from '@angular/cdk/collections';
// import { MatPaginator, MatSort } from '@angular/material';
// import { map } from 'rxjs/operators';
// import { Observable, of as observableOf, merge } from 'rxjs';

// // TODO: Replace this with your own data model type
// export interface ViewPersonItem {
//   id:number;
//   firstName: string;
//   lastName: string;
//   dob: string;
//   country:string;
//   gender:string;
//   email:string;
//   phone:string;
// }

// // TODO: replace this with real data from your application
// let EXAMPLE_DATA: ViewPersonItem[] = [
//   {id: 1, firstName: 'Sabik',lastName:'Abtahee',dob:'06/12/1997',country:'Bangladesh',gender:'Male',email:'sabikchamp@gmail.com',phone:"01552402705"},
//   {id: 2, firstName: 'Abdullah',lastName:'Mahmood',dob:'24/12/1995',country:'Bangladesh',gender:'Male',email:'abdullah@gmail.com',phone:'01552402705'},
//   {id: 3, firstName: 'John',lastName:'Dow',dob:'25/12/1995',country:'Switzerland',gender:'Male',email:'abdullah@gmail.com',phone:'01552402705'},
//   {id: 4, firstName: 'Gerald',lastName:'Pike',dob:'25/11/1993',country:'India',gender:'Female',email:'Gerald@gmail.com',phone:'01552402705'}
  
  
// ];

// /**
//  * Data source for the ViewPerson view. This class should
//  * encapsulate all logic for fetching and manipulating the displayed data
//  * (including sorting, pagination, and filtering).
//  */
// export class ViewPersonDataSource extends DataSource<ViewPersonItem> {
//   data: ViewPersonItem[] = EXAMPLE_DATA;

//   constructor(private paginator: MatPaginator, private sort: MatSort) {
//     super();
//   }

//   /**
//    * Connect this data source to the table. The table will only update when
//    * the returned stream emits new items.
//    * @returns A stream of the items to be rendered.
//    */
//   connect(): Observable<ViewPersonItem[]> {
//     // Combine everything that affects the rendered data into one update
//     // stream for the data-table to consume.
//     const dataMutations = [
//       observableOf(this.data),
//       this.paginator.page,
//       this.sort.sortChange
//     ];

//     // Set the paginator's length
//     this.paginator.length = this.data.length;

//     return merge(...dataMutations).pipe(map(() => {
//       return this.getPagedData(this.getSortedData([...this.data]));
//     }));
//   }

//   /**
//    *  Called when the table is being destroyed. Use this function, to clean up
//    * any open connections or free any held resources that were set up during connect.
//    */
//   disconnect() {}

//   /**
//    * Paginate the data (client-side). If you're using server-side pagination,
//    * this would be replaced by requesting the appropriate data from the server.
//    */
//   private getPagedData(data: ViewPersonItem[]) {
//     const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
//     return data.splice(startIndex, this.paginator.pageSize);
//   }

//   /**
//    * Sort the data (client-side). If you're using server-side sorting,
//    * this would be replaced by requesting the appropriate data from the server.
//    */
//   private getSortedData(data: ViewPersonItem[]) {
//     if (!this.sort.active || this.sort.direction === '') {
//       return data;
//     }

//     return data.sort((a, b) => {
//       const isAsc = this.sort.direction === 'asc';
//       switch (this.sort.active) {
//         case 'firstName': return compare(a.firstName, b.firstName, isAsc);
//         case 'lastName': return compare(a.lastName, b.lastName, isAsc);
//         case 'id': return compare(+a.id, +b.id, isAsc);
//         case 'dob': return compare(a.dob, b.dob, isAsc);
//         default: return 0;
//       }
//     });
//   }
// }

// /** Simple sort comparator for example ID/Name columns (for client-side sorting). */
// function compare(a, b, isAsc) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }
