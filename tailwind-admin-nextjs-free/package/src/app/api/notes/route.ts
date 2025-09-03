import { NextResponse } from 'next/server';


let NotesData = [
  {
    id: 1,
    color: 'primary',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    datef: '2023-06-03T23:28:56.782Z',
    deleted: false,
  },
  {
    id: 2,
    color: 'error',
    title:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,',
    datef: '2023-06-02T23:28:56.782Z',
    deleted: false,
  },
  {
    id: 3,
    color: 'warning',
    title:
      'consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
    datef: '2023-06-01T23:28:56.782Z',
    deleted: false,
  },
  {
    id: 4,
    color: 'success',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    datef: '2023-06-03T23:28:56.782Z',
    deleted: false,
  },
];

const resetNotes = [...NotesData];

// GET request to retrieve Notes data
export async function GET(req:any){
  let isBrowserRefreshed = req.headers.get('browserrefreshed');
 try{
   if(isBrowserRefreshed === "false"){
     return NextResponse.json({status:200 , msg:"Success" , data: NotesData})
   }else{
     NotesData = resetNotes;
     return NextResponse.json({status:200 , msg:"Success" , data:NotesData })
   }
 }catch(error){
   return NextResponse.json({status:400 , msg:"Internal server error",error})
 }
}


// DELETE endpoint for deleting a note
export async function DELETE(req:any){
  try{
    const { id } = await req.json();
    const remainingNotes = NotesData.filter((note) => note.id !== parseInt(id));
    NotesData = remainingNotes;
    return NextResponse.json({status:200 , msg:"Success" , data:NotesData})
  }catch(error){
    return NextResponse.json({status:400,msg:"Internal server error",error})
  }
}


//  POST endpoint for adding a new note
const currentDate = new Date();
export async function POST(req:any){
  try{
    const { title, color } = await req.json();
    const newNote = {
      id: NotesData.length + 1,
      title,
      color,
      deleted: false,
      datef: currentDate.toISOString(),
    };
    NotesData.push(newNote);
    return NextResponse.json({status:200 , msg:"Success" , data:NotesData})
  }catch(error){
    return NextResponse.json({status:400,msg:"Internal server error",error})
  }
}


// PUT endpoint for updating a note
export async function PUT(req:any){
  try{
    const { id, title, color } = await req.json();
    const index = NotesData.findIndex((note) => note.id === id);
  
    if (index !== -1) {
      NotesData[index] = { ...NotesData[index], title, color };
      return NextResponse.json({status:200 , msg:"Success" , data:NotesData})
    } else {
      return NextResponse.json({status:400,msg:"Note not found"})
    }
  }catch(error){
    return NextResponse.json({status:400,msg:"Internal server error",error})
  }
}

