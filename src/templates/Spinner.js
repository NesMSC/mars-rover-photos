import '../css/spinner.css';
/**
*
*
*@param boolean show show loading spinner
*@return spinner component or null
**/

const Spinner = (show) => {

    const template = `
        <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    `
    return (show)? template : null;
}

export default Spinner;