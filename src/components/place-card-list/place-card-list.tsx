import PlaceCard from '../place-card/place-card';
import { PagesProps } from '../../pages/pages-props.type';

function PlaceCardList({offers}: PagesProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer}/>)}
    </div>
  );
}

export default PlaceCardList;
