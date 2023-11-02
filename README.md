# yelp_viewer

React component to display Yelp star rating, review counts, and link to Yelp

![Example Usage](https://github.com/knomedia/yelp_viewer/blob/c91b5d6c5e516c1c4722d5c5923b6553bd431c0b/images/yelp_example.png?raw=true)

## Tests

Pull down, `npm install` and then:

```sh
npm run tests
```


## Usage

```jsx
<YelpViewer rating={rating}
            count={count}
            url={url}
            template={template} />
```

Default styles are availabe in CSS

```js
import 'yelp_viewer/dist/yelp_viewer.css';
```
