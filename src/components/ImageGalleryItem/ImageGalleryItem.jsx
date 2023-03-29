export const ImageGalleryItem = ({ imgUrl, tags }) => {
  // handleToggleModal= ()=>{

  // }
  return (
    <li>
      <img
        // onClick={handleToggleModal}
        // className={s.ImageGalleryItem__image}
        src={imgUrl}
        alt={tags.split(',')}
      />
    </li>
  );
};

//   {isModalOpen && (
//     <Modal onCloseModal={handleToggleModal}>
//       <img src={largeImgUrl} alt={tags.split(',')} />
//     </Modal>
// )}
