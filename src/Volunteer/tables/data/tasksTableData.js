

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
// import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
// import MDButton from "components/MDButton";

// Images
/* import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
*/

export default function data() {
  const Tasks = ({ name, description }) => (
    <MDBox display="flex" alignItems="center" lineHeight={2}>
      <MDBox ml={2} lineHeight={2}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDBox>
          <MDTypography variant="caption">{description}</MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "task", accessor: "task", width: "45%", align: "left" },
      { Header: "upload", accessor: "upload", align: "center" },
      { Header: "submit", accessor: "submit", align: "center" },
    ],

    rows: [
      {
        task: (
          <Tasks
            name="John Michael"
            description="john@creative-tim.comryeiiiiiooooooooooooooooooooooooooooooooooooiii"
          />
        ),
        upload: (
          <MDButton size="small" variant="contained" color="dark">
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
          </MDButton>
        ),
        submit: (
          <MDButton size="small" variant="contained" color="warning">
            Submit
          </MDButton>
        ),
      },
      {
        task: <Tasks name="Alexa Liras" description="alexa@creative-tim.com" />,
        upload: (
          <MDButton size="small" variant="contained" color="dark">
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
          </MDButton>
        ),
        submit: (
          <MDButton size="small" variant="contained" color="warning">
            Submit
          </MDButton>
          /*
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
          */
        ),
      },
      {
        task: (
          <Tasks
            name="Laurent Perrier"
            description="laurent@creative-tim.com"
          />
        ),
        upload: (
          <MDButton size="small" variant="contained" color="dark">
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
          </MDButton>
        ),
        submit: (
          <MDButton size="small" variant="contained" color="warning">
            Submit
          </MDButton>
        ),
      },
      {
        task: (
          <Tasks name="Michael Levi" description="michael@creative-tim.com" />
        ),
        upload: (
          <MDButton size="small" variant="contained" color="dark">
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
          </MDButton>
        ),
        submit: (
          <MDButton size="small" variant="contained" color="warning">
            Submit
          </MDButton>
        ),
      },
      {
        task: (
          <Tasks name="Richard Gran" description="richard@creative-tim.com" />
        ),
        upload: (
          <MDButton size="small" variant="contained" color="dark">
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
          </MDButton>
        ),
        submit: (
          <MDButton size="small" variant="contained" color="warning">
            Submit
          </MDButton>
        ),
      },
      {
        task: (
          <Tasks name="Miriam Eric" description="miriam@creative-tim.com" />
        ),
        upload: (
          <MDButton size="small" variant="contained" color="dark">
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
          </MDButton>
        ),
        submit: (
          <MDButton size="small" variant="contained" color="warning">
            Submit
          </MDButton>
        ),
      },
    ],
  };
}
