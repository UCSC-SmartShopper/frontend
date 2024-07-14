

interface props {
    // Define the props for the component here
    Price: number;
    Stock: number;
}

const EditItemDetails  = ({Price , Stock}:props) => {
    

    return (
        <div>
            {/* Add your JSX code here */}
            <div className="edit-item-details">
                <div className="edit-item-details__price">
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" value={Price} />
                </div>
                <div className="edit-item-details__stock">
                    <label htmlFor="stock">Stock</label>
                    <input type="number" id="stock" value={Stock} />
                </div>
            </div>
        </div>
    );
};

export default EditItemDetails;