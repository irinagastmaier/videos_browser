import categories from '../../api';
import Row from './Row';
import Banner from './Banner';

export default function Movies() {
  return (
    <>
      <Banner />
      {categories.map((category, i) => {
        return (
          <Row
            key={i}
            title={category.title}
            name={category.name}
            path={category.path}
          />
        );
      })}
    </>
  );
}
