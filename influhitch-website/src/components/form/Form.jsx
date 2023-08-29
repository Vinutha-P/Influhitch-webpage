import React, { useState } from "react";
import "./form.css";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
/>;

const Form = () => {
  const categoryOptions = [
    "Home Decor",
    "Lifestyle",
    "Fashion",
    "Sports & Fitness",
    "Gaming",
    "Technology",
    "Food",
    "Business",
    "Pet",
    "Education",
    "Parenting",
    "Art",
    "Beauty",
    "Travel",
    "Health",
    "Books",
    "Automative",
    "photography",
    "Entertainment",
    "Finance",
    "Comedy",
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  const [budget, setBudget] = useState("");

  const increaseBudget = () => {
    setBudget((prevBudget) => {
      const newBudget = prevBudget === "" ? 0 : parseFloat(prevBudget);
      return (newBudget + 1).toFixed(1);
    });
  };

  const decreaseBudget = () => {
    setBudget((prevBudget) => {
      const newBudget = prevBudget === "" ? 0 : parseFloat(prevBudget);
      return Math.max(newBudget - 1, 0).toFixed(1);
    });
  };

  return (
    <div className="form_container">
      <div className="form_container_content">
        <h1>Terms of Agreement</h1>

        <div className="form_container_contents double">
          <div>
            <h5>First Name *</h5>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <h5>Last Name *</h5>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>
        </div>

        <div className="form_container_contents double">
          <div>
            <h5>Email *</h5>
            <input type="text" name="email" placeholder="Email" required />
          </div>
          <div>
            <h5>Applying As *</h5>
            <div>
              <input
                type="radio"
                id="brand"
                name="applyingAs"
                value="brand"
                required
              />
              <label htmlFor="brand"> Brand</label>
            </div>
            <div>
              <input
                type="radio"
                id="influencer"
                name="applyingAs"
                value="influencer"
                required
              />
              <label htmlFor="influencer"> Influencer</label>
            </div>
          </div>
        </div>
        <div className="form_container_contents ">
          <h5>Mobile Number</h5>
          <input
            type="text"
            name="number"
            placeholder="Mobile Number"
            required
          />
        </div>

        <div className="form_container_contents double">
          <div>
            <h5>Organization Name *</h5>
            <input type="text" name="orgName" placeholder="Organization Name" />
          </div>
          <div>
            <h5>Category *</h5>
            <div>
              <select
                name="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categoryOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="form_container_contents double">
          <div>
            <h5>Campaign Type *</h5>
            <div>
              <input
                type="radio"
                id="barter"
                name="campaignType"
                value="barter"
                required
              />
              <label htmlFor="barter"> Barter</label>
            </div>
            <div>
              <input
                type="radio"
                id="paid"
                name="campaignType"
                value="paid"
                required
              />
              <label htmlFor="paid"> Paid</label>
            </div>
            <div>
              <input
                type="radio"
                id="both"
                name="campaignType"
                value="both"
                required
              />
              <label htmlFor="both"> Barter and Paid</label>
            </div>
          </div>
          <div>
            <h5>Budget</h5>

            <input
              type="text"
              name="budget"
              placeholder="Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            />
            <div>
              <span className="icon-button" onClick={increaseBudget}>
                <i className="material-icons">+</i>
              </span>
            </div>

            <div>
              <span className="icon-button" onClick={decreaseBudget}>
                <i className="material-icons">-</i>
              </span>
            </div>
          </div>
        </div>

        <div className="form_container_contents double">
          <div>
            <h5>Working Model *</h5>
            <div>
              <input
                type="radio"
                id="Campaign"
                name="working"
                value="Campaign"
                required
              />
              <label htmlFor="Campaign"> Single Campaign</label>
            </div>
            <div>
              <input
                type="radio"
                id="Retainer"
                name="working"
                value="Retainer"
                required
              />
              <label htmlFor="Retainer"> Retainer</label>
            </div>
          </div>
          <div>
            <h5>Retainer Term</h5>
            <div>
              <input
                type="radio"
                id="3months"
                name="retainer"
                value="3months"
                required
              />
              <label htmlFor="3months">3 months</label>
            </div>
            <div>
              <input
                type="radio"
                id="6months"
                name="retainer"
                value="6months"
                required
              />
              <label htmlFor="6months">6 Months</label>
            </div>
            <div>
              <input
                type="radio"
                id="9months"
                name="retainer"
                value="9months"
                required
              />
              <label htmlFor="9months">9 Months</label>
            </div>
            <div>
              <input
                type="radio"
                id="12months"
                name="retainer"
                value="12months"
                required
              />
              <label htmlFor="12months"> 12 Months</label>
            </div>
          </div>
        </div>

        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Form;
