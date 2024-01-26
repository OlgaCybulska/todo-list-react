import Input from "../../Input";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { Wrapper } from "./styled";
import searchQueryParamName from "../../TaskList/searchQueryParamName";
import {
  useQueryParameter,
  useRepleaceQueryParameter,
} from "../../TaskList/searchQueryParameters";

export default () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useRepleaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };
  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      ></Input>
    </Wrapper>
  );
};
