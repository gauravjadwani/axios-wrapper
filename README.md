# Class Based Wrapper for Axios

A Class based Wrapper of axios for react,vue and vanila javascript.

### Prerequisites

A basic understanding of vanila javascript

### Examples
Example for vanila javscript
```
import ApiHandler from 'axios-wrapper';

let apiObject = new ApiHandler();//creation of a axios object

let bodyFormData = new FormData();
bodyFormData.set("client_id", "XYZ");//constructing body of the request

apiObject.post(baseurl + "/verifyclient/", bodyFormData)
  .then(function(response) {
    //success
  }).catch(function (error) {
  //catch errors
  }
```

Example specific to react
```
import ApiHandler from 'axios-wrapper';

 const handleErrorDefault= (error,dispatch)=>{
   /*
   handleErrorDefault is the default function that should be called to
   catch the generic error
    */
   switch (error.response.status) {
     case 400:
     //Bad-request can be generic
       return Promise.reject(error);
       break;
     case 401:
     //Generic error
       localStorage.clear(); //clearing the session
       //redirects to the login page
       dispatch({
         type: "VERIFY_AUTHENTICATION",
         payload: false
       });
       return Promise.reject(error);
       break;
     case 404:
     //Generic error
       dispatch({
         type: "LOGIN_NOTIFICATION",
         payload: "Oops something went wrong"
       });
       dispatch({
         type: "VERIFY_AUTHENTICATION",
         payload: false
       });
       return Promise.reject(error);
       break;
     default:
       dispatch({
         type: "INTERNAL_SERVER_ERROR",
         payload: true
       });
       return Promise.reject(error);
       break;
   }
 }

let apiObject = new ApiHandler(false, false, error =>
  handleErrorDefault(error, dispatch)
);

let bodyFormData = new FormData();
bodyFormData.set("client_id", clientId);
apiObject.post(baseurl + "/verifyclient/", bodyFormData)
  .then(function(response) {

  }).catch(function (error) {
  //non-generic errors can be catched
  }
```

### Installing

npm i axios-wrapper

## Authors

[Gaurav Jadwani](https://github.com/gauravjadwani)
