import { useEffect } from 'react';
// import { useUI } from 'components/UI/context';

function handleMutationErrors(mutation) {
  useEffect(() => {
    if (mutation.error?.response?.data?.errors && mutation?.isError) {
      const apiErrors = mutation.error.response.data.errors;
      Object.keys(apiErrors).map((fieldName) => {
        // TODO
        console.error(fieldName, apiErrors[fieldName][0]);
      });
    } else if (mutation?.isError) {
      console.error('API Error');
    }
  }, [mutation.isError]);
}

function handleMutationSuccess(mutation, cb) {
  // const { showToast } = useUI();
  // mutation.data.data.message
  const onSuccess = () => {
    if (mutation?.isSuccess) {
      if (cb && typeof cb === 'function') {
        cb({ data: mutation.data.data });
      } else {
        // showToast({ type: 'success' });
        alert('Ok');
      }
    }
  };
  useEffect(onSuccess, [mutation.isSuccess]);
}

export { handleMutationErrors, handleMutationSuccess };
