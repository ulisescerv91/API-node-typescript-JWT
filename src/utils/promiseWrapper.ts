/**
  * Helper for async/await error handling. Resolves a promise and passes an error if one exists. Promises of any type with any return value are allowed.
  * @param promise Function or promise
  */
 export const promiseWrapper = (promise: any) => {
    return promise.then((data: any ) => (<any> { data, error: undefined }))
    .catch((error: any) => (<any> { error, data: undefined }));
};