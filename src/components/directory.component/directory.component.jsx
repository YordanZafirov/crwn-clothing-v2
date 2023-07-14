import './directory.styles.scss'
import { categories } from "../categories-list/categories-list";
import CategoryItem from "../category-item/category-item.component";

const Directory = () => {
    return ( 
        <div className='categories-container'>
        {categories.map(category => (
          <CategoryItem category={category} key={category.id}/>
        ))}
      </div>
     );
}
 
export default Directory;