var users = [{
   id: 1,
   name: "Melinda Gates",
   availability: [
      {
            id: 1,
            day: "Monday",
            startTime: "08:00",
            endTime: "20:00"
      },
      {
            id: 2,
            day: "Tuesday",
            startTime: "08:00",
            endTime: "20:00"
      },
      {
            id: 3,
            day: "Thursday",
            startTime: "08:00",
            endTime: "20:00"
      },
      {
            id: 4,
            day: "Saturday",
            startTime: "08:00",
            endTime: "15:00"
      }
   ],
   scheduledItems: [
      {
         id: 1,
         day: "Monday",
         time: "15:30",
         duration: "05:30"
      },
      {
         id: 2,
         day: "Tuesday",
         time: "10:30",
         duration: "04:30"
      },
      {
         id: 3,
         day: "Saturday",
         time: "09:30",
         duration: "05:30"
      }
   ]
}, {
   id: 2,
   name: "Steve Jobs",
   availability: [
      {
            id: 5,
            day: "Tuesday",
            startTime: "08:00",
            endTime: "20:00"
      },
      {
            id: 6,
            day: "Wednesday",
            startTime: "08:00",
            endTime: "20:00"
      },
      {
            id: 7,
            day: "Friday",
            startTime: "08:00",
            endTime: "20:00"
      }
   ],
   scheduledItems: [
      {
         "id": 4,
         "day": "Tuesday",
         "time": "10:30",
         "duration": "04:30"
      },
      {
         "id": 5,
         "day": "Wednesday",
         "time": "15:30",
         "duration": "05:30"
      },
      {
         "id": 6,
         "day": "Friday",
         "time": "09:30",
         "duration": "05:30"
      }
   ]
}];

class ServiceUsers {
   constructor() {
      
   }
   
   setupUsersTable() {
      let el;
      // loop through users
      for (let user of users) {
         // clone template tag
         el = $('tr[hidden]').clone();
         // populate new tag w data
         $(el).html(eval('`' + $(el).html() + '`'));
         // remove hidden attribute
         el.removeAttr('hidden');
         // insert new tag into document
         $('tbody').append(el);
         
      }
   }
};

var serviceUsersObj = new ServiceUsers();
serviceUsersObj.setupUsersTable();