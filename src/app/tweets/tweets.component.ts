import { Component } from '@angular/core';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent {
    // Define a static data array with sample data
    dataList = [
      {
        vehiclename: 'Vehicle 1',
        site: 'Site 1',
        groupName: 'Group A',
        installstatus: 'Active'
      },
      {
        vehiclename: 'Vehicle 2',
        site: 'Site 2',
        groupName: 'Group B',
        installstatus: 'Inactive'
      },
      {
        vehiclename: 'Vehicle 3',
        site: 'Site 1',
        groupName: 'Group A',
        installstatus: 'Active'
      },
      // Add more data as needed
    ];

      // Define a property for tracking the currently sorted field and direction
  currentSortedField: any;
  isSortAscending: boolean = true;

  // Function to handle sorting
  sort(field: any) {
    if (field === this.currentSortedField) {
      // Toggle sorting direction if the same field is clicked again
      this.isSortAscending = !this.isSortAscending;
    } else {
      // Set the new sorting field and reset the direction
      this.currentSortedField = field;
      this.isSortAscending = true;
    }

    // Perform the actual sorting of the dataList array
    this.dataList.sort((a:any, b:any) => {
      if (a[field] < b[field]) {
        return this.isSortAscending ? -1 : 1;
      } else if (a[field] > b[field]) {
        return this.isSortAscending ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

}
