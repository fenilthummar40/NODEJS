import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DetailsPage() {
  const { bidNumber } = useParams();
  const navigate = useNavigate();
  const [bidDetails, setBidDetails] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("bidFormData")) || [];
    const selectedBid = savedData.find((bid) => bid.bidNumber === bidNumber);
    setBidDetails(selectedBid);
  }, [bidNumber]);

  if (!bidDetails) {
    return <p>Loading or No details found...</p>;
  }

  return (
    <div>
      <h2>Bid Details</h2>
      <p><strong>Bid Number:</strong> {bidDetails.bidNumber}</p>
      <p><strong>Created By:</strong> {bidDetails.createdBy}</p>
      <p><strong>Start Date & Time:</strong> {bidDetails.startDateTime}</p>
      <p><strong>From City:</strong> {bidDetails.fromCity}</p>
      <p><strong>To City:</strong> {bidDetails.toCity}</p>
      <p><strong>No. of Vehicles:</strong> {bidDetails.numOfVehicles}</p>
      <p><strong>Material Weight:</strong> {bidDetails.materialWeight}</p>
      <p><strong>Response:</strong> {bidDetails.response}</p>
      <p><strong>Assigned Staff:</strong> {bidDetails.assignedStaff}</p>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default DetailsPage;
