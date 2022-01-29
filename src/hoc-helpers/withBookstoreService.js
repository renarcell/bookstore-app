import { BookstoreServiceConsumer } from '../components/bookstore-service-context';
const withBookstoreService = (mapMethodsToProps) => (View) => {
	return function(props) {
		return (
		<BookstoreServiceConsumer>
			{
				(bookstoreService) => {
					if (mapMethodsToProps) {
						const services = mapMethodsToProps(bookstoreService);
						return <View {...services} {...props}/>;
					} else {
						return <View bookstoreService={bookstoreService} {...props}/>;
					}
				}
			}
		</BookstoreServiceConsumer>
		);
	}
};

export { withBookstoreService };