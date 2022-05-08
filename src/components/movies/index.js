import Row from './Row';
import categories from '../../api';

export default function Movies() {
  return (
    <>
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
