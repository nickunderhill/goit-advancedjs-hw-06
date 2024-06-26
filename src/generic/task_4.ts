/*
Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Props {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class PageWithProps extends Component<Props> {
  pageInfo() {
    console.log(this.props.title);
  }
}
