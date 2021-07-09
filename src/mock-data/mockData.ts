import {Injectable} from '@angular/core';

@Injectable()
export class MockData {

  poemDetail: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut ' +
    'voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit ' +
    'vero unde, sed, incidunt et ea quo dolore laudantium consectetur!';

  reader: any = [
    {id: 1, name: 'Metin GÜN', comment: 'vero unde, sed, incidunt et ea quo dolore laudantium consectetur'},
    {id: 2, name: 'Metin GÜN', comment: 'vero unde, sed, incidunt et ea quo dolore laudantium consectetur'},
    {id: 3, name: 'Metin GÜN', comment: 'vero unde, sed, incidunt et ea quo dolore laudantium consectetur'},
    {id: 4, name: 'Metin GÜN', comment: 'vero unde, sed, incidunt et ea quo dolore laudantium consectetur'},
    {id: 5, name: 'Metin GÜN', comment: 'vero unde, sed, incidunt et ea quo dolore laudantium consectetur'},
    {id: 6, name: 'Metin GÜN', comment: 'vero unde, sed, incidunt et ea quo dolore laudantium consectetur'},
    {id: 7, name: 'Metin GÜN', comment: 'vero unde, sed, incidunt et ea quo dolore laudantium consectetur'}
  ];

  categoryMock: any = [
    {id: 1, categoryName: 'Love', pictureCategory: 'https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502', description: 'This is love'},
    {id: 2, categoryName: 'Love', pictureCategory: 'https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502', description: 'This is love'},
    {id: 3, categoryName: 'Love', pictureCategory: 'https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502', description: 'This is love'},
    {id: 4, categoryName: 'Love', pictureCategory: 'https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502', description: 'This is love'},
    {id: 5, categoryName: 'Love', pictureCategory: 'https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502', description: 'This is love'},
    {id: 6, categoryName: 'Love', pictureCategory: 'https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502', description: 'This is love'}
  ];

  poemMock: any = [
    {title1: 'Gamze', poem: this.poemDetail, writer: 'Kaya ŞAHİN', date: (new Date()), categoryId: 1, comments: [2, 3, 4, 5]},
    {title: 'Gamze', poem: this.poemDetail, writer: 'Kaya ŞAHİN', date: (new Date()), categoryId: 2, comments: [2, 3, 4, 5]},
    {title: 'Gamze', poem: this.poemDetail, writer: 'Kaya ŞAHİN', date: (new Date()), categoryId: 1, comments: [2, 3, 4, 5]},
    {title: 'Gamze', poem: this.poemDetail, writer: 'Kaya ŞAHİN', date: (new Date()), categoryId: 3, comments: [2, 3, 4, 5]},
    {title: 'Gamze', poem: this.poemDetail, writer: 'Kaya ŞAHİN', date: (new Date()), categoryId: 5, comments: [2, 3, 4, 5]},
    {title: 'Gamze', poem: this.poemDetail, writer: 'Kaya ŞAHİN', date: (new Date()), categoryId: 1, comments: [2, 3, 4, 5]},
    {title: 'Gamze', poem: this.poemDetail, writer: 'Kaya ŞAHİN', date: (new Date()), categoryId: 6, comments: [2, 3, 4, 5]}
  ];

  homePageMock: any = {
    letter1: this.poemDetail,
    letter2: this.poemDetail,
    letter3: this.poemDetail,
    bigLetter: 'Lorem ipsum dolor sit amet',
    pictureHomePage: 'https://unsplash.imgix.net/uploads%2F14115408840644deb16b0%2F2dc933e3?q=75&fm=jpg&auto=format&s=7f43646e4d26049c6c39890afb2e5ced'
  };

}
