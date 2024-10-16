const BookingCard = ({ booking }) => {
    return (
      <div className="bg-blue-200 text-center p-1 rounded">
        {booking.user.username}
      </div>
    );
  };

  export default BookingCard;