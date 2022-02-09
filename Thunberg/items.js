import express from 'express';
import {v4 as uuidv4} from 'uuid';

const router = express.Router();

let items = [];
// GET request to /items that shows items array
router.get( '/', (req, res) => {
    console.log(items);
    res.send(items);
});
//-------------------------------------------------------------->

// POST request to /items that pushes items to items array 
router.post('/', (req, res) => {
const item = req.body;
items.push({...item, id:uuidv4()});

res.send('item(s) entered');
});
//-------------------------------------------------------------->

// GET request to /items/<some id> that finds and displays a unique item
// in items arr
router.get('/:id', (req,res) => {
const id = req.params.id;
const foundItem = items.find((item) => item.id === id);
res.send(req.params);
});
//--------------------------------------------------------------->

// DELETE request to /items/<some id> that finds and deletes a unique item
// in items arr
router.delete('/:id', (req,res) => {
    const id = req.params.id;

    //filters items other than item with uniqe id from items arr 
    items = items.filter((item) => item.id !== id);

    res.send('item deleted');
});
export default router;
//---------------------------------------------------------------->

// PUT request to /items/<some id> completely change all details of a unique item 
// in items arr
router.put('/:id', (req,res) => {
    const id = req.params.id;
    //filters item with uniqe id from items arr
    const itemToChange = items.find((item) => item.id === id);
    //finds index of filtered item in items arr
    let index = items.indexOf(itemToChange);
    const update = {    
            Name: req.body.Name,
            Description: req.body.Description,
            Recyclable: req.body.Recyclable,
            Quantity: req.body.Quantity,
            PPU: req.body.PPU,
            id: itemToChange.id
    }
    // updates items arr
    items.splice(index,1,update);
    res.send('item changed');
});