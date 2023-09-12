import { categories } from "../categories-list/categories-list";
import DirectoryItem from "../directory-item/directory-item.component"
import { CategoriesContainer } from './directory.styles';

const Directory = () => {
    return ( 
        <CategoriesContainer>
        {categories.map(category => (
          <DirectoryItem category={category} key={category.id}/>
        ))}
      </CategoriesContainer>
     );
}
 
export default Directory;