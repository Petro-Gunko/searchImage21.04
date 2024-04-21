import { Grid } from "../Grid/Grid";
import { PhotosGalleryItem } from "../PhotosGalleryItem/PhotosGalleryItem";
export const PhotosGallery = ({newImages}) => {
  return (
    <Grid>
  {newImages.map((image)=>{
return <PhotosGalleryItem key={image.id} image={image}/>
  })}
</Grid>
  );
};
