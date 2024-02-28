import Select from 'react-select'

const options = [
  { value: 'thriller', label: 'Thriller' },
  { value: 'horror', label: 'Horror' },
  { value: 'action', label: 'Action' }
]



function GenreSelect(){
    const handleSelectChange = (event: any) => {
        alert(event.target.value);
    };

    return (
        <div className="container my-4 bg-danger-subtle">
            <span>Select Genre:</span>
            <select className="mx-4" onChange={handleSelectChange}>
                <option value="">Select</option>
                <option value="action">Action</option>
                <option value="thriller">Thriller</option>
                <option value="horror">Horror</option>
            </select>
        </div>
    );
}


export default GenreSelect;
