function conflictError(message:any) {
    return {
      name: "ConflictError",
      message,
    };
  }
  
  function duplicated(message:any) {
    return {
      name: "Movie duplicated",
      message: "This movie already exists"
    };
  }

  function notFoundError() {
    return {
      name: "NotFoundError",
      message: "No result for this search!",
    };
  }


  


 
  export default {
    conflictError,
    notFoundError,
    duplicated
  };