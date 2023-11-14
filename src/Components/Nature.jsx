export default function Nature() {
    return (
      <div className="seashore-container">
        <div className="text-container">
          <h1>Nature</h1>
          <p>
            First Landing State Park, nestled along the coastline of Virginia, is
            a captivating natural oasis that beautifully merges land and sea.
            Spanning over 2,800 acres, this park is steeped in history, being the
            site where English colonists first landed in 1607 before continuing
            their journey to establish Jamestown.
          </p>
        </div>
        <img
          className="seashore-photo"
          src={
            "https://virginiabeach.guide/wp-content/uploads/2019/02/First-Landing-State-Park.jpg"
          }
          alt="First Landing State Park"
        />
      </div>
    );
  }