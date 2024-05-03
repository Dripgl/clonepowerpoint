// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

// function PdfPageList({ pages }) {
//   const [pageList, setPageList] = useState(pages);

//   const onDragEnd = (result) => {
//     if (!result.destination) return;
//     const items = Array.from(pageList);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);

//     setPageList(items);
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <Droppable droppableId="pages">
//         {(provided) => (
//           <div {...provided.droppableProps} ref={provided.innerRef}>
//             {pageList.map((page, index) => (
//               <Draggable key={page.id} draggableId={page.id} index={index}>
//                 {(provided) => (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                     style={{
//                       userSelect: 'none',
//                       padding: 16,
//                       margin: '0 0 8px 0',
//                       minHeight: '50px',
//                       backgroundColor: '#fff',
//                       color: '#333',
//                       ...provided.draggableProps.style,
//                     }}
//                   >
//                     Pagina {page.number} {/* Mostra un'anteprima o il numero della pagina */}
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// }

// export default PdfPageList;
