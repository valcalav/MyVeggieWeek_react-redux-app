
function AddButton({ recipe, add }) {

    let selectedDay = ''

    const onSelection = () => {
        return selectedDay = document.getElementById("select-day").value;
    }

    return (
        <>
            <select id='select-day' onChange={() => onSelection()}>
                <option value='select'>Select day</option>
                <option value='monday'>Monday</option>
                <option value='tuesday'>Tuesday</option>
                <option value='wednesday'>Wednesday</option>
                <option value='thursday'>Thursday</option>
                <option value='friday'>Friday</option>
                <option value='saturday'>Saturday</option>
                <option value='sunday'>Sunday</option>
            </select>

            <a onClick={() => add(selectedDay, recipe)} className='add-btn' >Add</a>
        </>
    )
}

export default AddButton
