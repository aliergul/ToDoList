const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <input
                        placeholder="Yapılacak bir şeyler ekleyin..."
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="form-control form-control.lg"
                    />
                </div>
                <div className="col-auto">
                    <button 
                        onClick={addTask}
                        className="btn btn-success"
                        color="teal">
                        Ekle
                    </button>
                </div>
            </div>

        </>
    )
}
export default AddTaskForm;