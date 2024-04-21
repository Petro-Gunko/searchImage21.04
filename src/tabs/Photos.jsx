import { getPhotos } from 'apiService/photos';
import {PhotosGallery} from '../components/PhotosGallery/PhotosGallery'
import { Form, Text } from 'components';
import {Button} from '../components/Button/Button'
import {Loader} from '../components/Loader/Loader'
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [images, setImages] = useState([])
  const [error, setError] = useState(null)
  const [isloading, setIsloading] = useState(false)

  const handleClick = () => {
    setPage(page+1)
  }
  useEffect(() => {
    if (query === '') {
      return
    }
    setIsloading(true)
    const getImages = async () => {
      try {
        const { photos, total_results } = await getPhotos(query, page);
        setImages([...images, ...photos])
        setTotal(total_results);
      } catch (error) {
        setError(error.message)
      } finally {
        setIsloading(false)
      }
    };
    getImages();
  }, [query, page]);

  const onSubmit = (quet) => {
    setQuery(quet);
    setPage(1)
    setTotal(0)
    setImages([])
    setError(null)
  }
  return (
    <>
      <Form onSubmit={ onSubmit} />
      <PhotosGallery newImages={images}/>
      {isloading && <Loader/>}
      {error && <p>Error {error}</p>}
     {total > images.length &&  <Button onClick={handleClick}>Load more</Button>}
     {images.length === 0 && query !=='' && <p>There is no images with request {query}</p>}
    </>
  );
};
