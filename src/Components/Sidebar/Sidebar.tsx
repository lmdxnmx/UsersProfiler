import s from "./Sidebar.module.scss";
import { Button } from "./../Button/Button";
import { SidebarProps, FilterData } from "./SidebarProps";
export const Sidebar = ({
  users,
  setFlag,
  flag,
  disabled,
}: SidebarProps): JSX.Element => {
  const cityFilter = () => {
    users?.sort((a: FilterData, b: FilterData) => {
      const firstName = a.address.city.toLowerCase();
      const secondName = b.address.city.toLowerCase();
      if (firstName < secondName) {
        return -1;
      }
      if (firstName > secondName) {
        return 1;
      }
      return 0;
    });
    setFlag(!flag);
  };
  const nameFilter = () => {
    users?.sort((a: FilterData, b: FilterData) => {
      const firstName = a.company.name.toLowerCase();
      const secondName = b.company.name.toLowerCase();
      if (firstName < secondName) {
        return -1;
      }
      if (firstName > secondName) {
        return 1;
      }
      return 0;
    });
    setFlag(!flag);
  };
  return (
    <div className={s.sidebar}>
      <div className={s.sidebar__wrapper}>
        <span className={s.sidebar__sort}>Сортировка</span>
        <Button
          width={86}
          name={"по городу"}
          bgcolor={"#4B51EF"}
          onClick={cityFilter}
          type="button"
          disabled={disabled}
        />
        <Button
          width={105}
          name={"по компании"}
          bgcolor={"#4B51EF"}
          onClick={nameFilter}
          type="button"
          disabled={disabled}
        />
      </div>
    </div>
  );
};
