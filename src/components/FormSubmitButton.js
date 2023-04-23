export function FormSubmitButton() {
    
    function handleSubmit(event, query)
    
    return <form>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
        </form>
  }

export default FormSubmitButton;