import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { Avatar } from '@mantine/core';
import './settings.scss';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Cookies from 'js-cookie';
import { RxAvatar } from 'react-icons/rx';
import { FaSpinner } from 'react-icons/fa';
const { URL } = window;

const Settings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [states, setStates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [profile, setProfile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    profilePhoto: '',
  });
  const [initials, setInitials] = useState('');

  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    password: '',
  });

  const [conpanyFormData, setCompanyFormData] = useState({
    companyName: '',
    businessType: '',
    address: '',
    companyPhone: '',
    country: '',
    state: '',
    numOfEmployees: '',
    companyRegNo: '',
  });

  const [performanceReviewData, setPerformanceReviewData] = useState({
    midYearStartDate: '',
    midYearEndDate: '',
    fullYearStartDate: '',
    fullYearEndDate: '',
    appraisalStartDate: '',
    appraisalEndDate: '',
  });

  const [personalFormData, setPersonalFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  });
  const [option1, setOption1] = useState({
    text: '',
    value: '',
  });
  const [option2, setOption2] = useState({
    text: '',
    value: '',
  });
  const [option3, setOption3] = useState({
    text: '',
    value: '',
  });
  const [option4, setOption4] = useState({
    text: '',
    value: '',
  });
  const [option5, setOption5] = useState({
    text: '',
    value: '',
  });
  const [performanceQuestions, setPerformanceQuestions] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    // category: "Review",
    // reviewType: "Performance Review"
  });
  const [appraisalQuestions, setAppraisalQuestions] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    // category: "Review",
    // reviewType: "Performance Review"
  });
  const [selfQuestions, setSelfQuestions] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    // category: "Review",
    // reviewType: "Performance Review"
  });
  const [competencyQuestions, setCompetencyQuestions] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    // category: "Review",
    // reviewType: "Performance Review"
  });
  const [goalQuestions, setGoalQuestions] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    // category: "Review",
    // reviewType: "Performance Review"
  });

  useEffect(() => {
    const url = `https://pms-jq9o.onrender.com/api/v1/admin/findme`;
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${Cookies.get('Token')}` },
      })
      .then(res => {
        console.log(res.data.data);
        setPersonalFormData({
          firstName: res.data.data.adminUser.firstName,
          lastName: res.data.data.adminUser.lastName,
          email: res.data.data.adminUser.email,
          role: res.data.data.adminUser.role,
        });
        setPerformanceReviewData({
          midYearStartDate: res.data.data.company[0].midYearStartDate,
          midYearEndDate: res.data.data.company[0].midYearEndDate,
          fullYearStartDate: res.data.data.company[0].fullYearStartDate,
          fullYearEndDate: res.data.data.company[0].fullYearEndDate,
          appraisalStartDate: res.data.data.company[0].appraisalStartDate,
          appraisalEndDate: res.data.data.company[0].appraisalEndDate,
        });
        setProfile(res.data.data.adminUser.profilePhoto);
        setCompanyFormData({
          companyName: res.data.data.company[0].companyName,
          businessType: res.data.data.company[0].businessType,
          address: res.data.data.company[0].address,
          companyPhone: res.data.data.company[0].companyPhone,
          country: res.data.data.company[0].country,
          state: res.data.data.company[0].state,
          numOfEmployees: res.data.data.company[0].numOfEmployees,
          companyRegNo: res.data.data.company[0].companyRegNo,
        });
        setData(res.data.data.adminUser);
        setInitials(
          res.data.data.adminUser.firstName[0] +
            res.data.data.adminUser.lastName[0]
        );
      });
  }, []);

  const submitPasswordChange = async event => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const Token = Cookies.get('Token');
      const res = await axios.patch(
        'https://pms-jq9o.onrender.com/api/v1/admin/changePassword',
        passwordData,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      setIsLoading(false);

      toast.success('Password Successfully Changed');
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };

  const submitCompanyDetails = async event => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const Token = Cookies.get('Token');
      console.log(Token);
      const res = await axios.patch(
        'https://pms-jq9o.onrender.com/api/v1/admin/updatecompany',
        conpanyFormData,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );

      setData({
        ...data,
        companyName: res.data.data.updateCompany.companyName,
      });
      setIsLoading(false);

      toast.success('Updated Successfully');
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };

  const submitPerformanceReview = async event => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const Token = Cookies.get('Token');
      const res = await axios.patch(
        'https://pms-jq9o.onrender.com/api/v1/admin/updatecompanydetails',
        performanceReviewData,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      setIsLoading(false);

      toast.success('Updated Successfully');
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };

  const submitPersonalInfo = async event => {
    event.preventDefault();
    const token = Cookies.get('Token');
    console.log(Cookies.get('Token'));
    toast.success({ token });
    try {
      setIsLoading(true);
      const Token = Cookies.get('Token');
      const res = await axios.patch(
        'https://pms-jq9o.onrender.com/api/v1/admin/updatepersonalinfo',
        personalFormData,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );

      setData({
        ...data,
        firstName: res.data.data.updateInfo.firstName,
        lastName: res.data.data.updateInfo.lastName,
      });
      setInitials(
        res.data.data.updateInfo.firstName[0] +
          res.data.data.updateInfo.lastName[0]
      );
      setIsLoading(false);

      toast.success('Updated Successfully');
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };
  const handlePasswordChange = event => {
    const { name, value } = event.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handlePersonalInputChange = event => {
    const { name, value } = event.target;
    setPersonalFormData({ ...personalFormData, [name]: value });
  };

  const handleCompanyInputChange = event => {
    const { name, value } = event.target;
    setCompanyFormData({ ...conpanyFormData, [name]: value });
  };

  const handlePerformanceReviewInputChange = event => {
    const { name, value } = event.target;
    setPerformanceReviewData({ ...performanceReviewData, [name]: value });
  };

  const handleImageUpload = event => {
    setUploading(true);
    setProfile(event.target.files[0]);

    // const url = `https://pms-jq9o.onrender.com/api/v1/admin/photoupload`

    // axios.post(url, formdata, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
    // .then(res => {
    //   toast.success('Image Uploaded Successfully')
    //   console.log(res.data.data)
    // }).catch(err => {
    //   toast.error(err.response.data.message)
    // })
  };

  const handleSubmitProfile = async event => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('profile', profile);

    setIsLoading(true);
    const Token = Cookies.get('Token');
    await axios
      .post(
        'https://pms-jq9o.onrender.com/api/v1/admin/photoupload',
        formdata,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then(response => {
        setIsLoading(false);
        setUploading(false);
        toast.success('image Uploaded Successfully');
        setData({ ...data, profilePhoto: response.data.data.profilePhoto });
        setProfile(response.data.data.profilePhoto);
        // Handle the response from the server
      })
      .catch(error => {
        setIsLoading(false);
        setUploading(true);
        // Handle any errors that occurred during the upload
      });
  };

  const handlePerformanceQuestions = e => {
    e.preventDefault();
    const url = `https://pms-jq9o.onrender.com/api/v1/question/setquestion/${Cookies.get(
      'companyID'
    )}`;
    setIsLoading(true);

    axios
      .post(
        url,
        {
          questions: [
            {
              text: performanceQuestions.question1,
              order: 1,
            },
            {
              text: performanceQuestions.question2,
              order: 2,
            },
            {
              text: performanceQuestions.question3,
              order: 3,
            },
            {
              text: performanceQuestions.question4,
              order: 4,
            },
            {
              text: performanceQuestions.question5,
              order: 5,
            },
          ],
          category: 'Review',
          reviewType: 'Performance Review',
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('Token')}`,
          },
        }
      )
      .then(res => {
        console.log(res.data);
        setIsLoading(false);
        toast.success('Questions Updated Successfully');
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
        // Handle any errors that occurred during the upload
      });
  };

  const handleAppraisalQuestons = e => {
    e.preventDefault();
    const url = `https://pms-jq9o.onrender.com/api/v1/question/setquestion/${Cookies.get(
      'companyID'
    )}`;
    setIsLoading(true);

    axios
      .post(
        url,
        {
          questions: [
            {
              text: appraisalQuestions.question1,
              order: 1,
            },
            {
              text: appraisalQuestions.question2,
              order: 2,
            },
            {
              text: appraisalQuestions.question3,
              order: 3,
            },
            {
              text: appraisalQuestions.question4,
              order: 4,
            },
            {
              text: appraisalQuestions.question5,
              order: 5,
            },
          ],
          category: 'Review',
          reviewType: '360 Appraisal',
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('Token')}`,
          },
        }
      )
      .then(res => {
        console.log(res.data.data);
        setIsLoading(false);
        toast.success('Questions Updated Successfully');
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
        // Handle any errors that occurred during the upload
      });
  };

  const handleSelfQuestions = e => {
    e.preventDefault();
    const url = `https://pms-jq9o.onrender.com/api/v1/question/setquestion/${Cookies.get(
      'companyID'
    )}`;
    setIsLoading(true);

    axios
      .post(
        url,
        {
          questions: [
            {
              text: selfQuestions.question1,
              order: 1,
            },
            {
              text: selfQuestions.question2,
              order: 2,
            },
            {
              text: selfQuestions.question3,
              order: 3,
            },
            {
              text: selfQuestions.question4,
              order: 4,
            },
            {
              text: selfQuestions.question5,
              order: 5,
            },
          ],
          category: 'Review',
          reviewType: 'Self Appraisal',
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('Token')}`,
          },
        }
      )
      .then(res => {
        console.log(res.data.data);
        setIsLoading(false);
        toast.success('Questions Updated Successfully');
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
        // Handle any errors that occurred during the upload
      });
  };

  const handleGoalQuestions = e => {
    e.preventDefault();
    const url = `https://pms-jq9o.onrender.com/api/v1/question/setquestion/${Cookies.get(
      'companyID'
    )}`;
    setIsLoading(true);

    axios
      .post(
        url,
        {
          questions: [
            {
              text: goalQuestions.question1,
              order: 1,
            },
            {
              text: goalQuestions.question2,
              order: 2,
            },
            {
              text: goalQuestions.question3,
              order: 3,
            },
            {
              text: goalQuestions.question4,
              order: 4,
            },
            {
              text: goalQuestions.question5,
              order: 5,
            },
          ],
          category: 'Review',
          reviewType: 'Goal Review',
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('Token')}`,
          },
        }
      )
      .then(res => {
        console.log(res.data.data);
        setIsLoading(false);
        toast.success('Questions Updated Successfully');
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
        // Handle any errors that occurred during the upload
      });
  };

  const handleCompetencyQuestions = e => {
    e.preventDefault();
    const url = `https://pms-jq9o.onrender.com/api/v1/question/setquestion/${Cookies.get(
      'companyID'
    )}`;
    setIsLoading(true);

    axios
      .post(
        url,
        {
          questions: [
            {
              text: competencyQuestions.question1,
              order: 1,
            },
            {
              text: competencyQuestions.question2,
              order: 2,
            },
            {
              text: competencyQuestions.question3,
              order: 3,
            },
            {
              text: competencyQuestions.question4,
              order: 4,
            },
            {
              text: competencyQuestions.question5,
              order: 5,
            },
          ],
          category: 'Competency',
          reviewType: 'Competency',
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('Token')}`,
          },
        }
      )
      .then(res => {
        console.log(res.data.data);
        setIsLoading(false);
        toast.success('Questions Updated Successfully');
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
        // Handle any errors that occurred during the upload
      });
  };

  useEffect(() => {
    const Token = Cookies.get('Token');

    axios
      .get(
        `https://pms-jq9o.onrender.com/api/v1/question/getQuestions/${Cookies.get(
          'companyID'
        )}/Performance Review/Review`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then(res => {
        setPerformanceQuestions({
          question1: res.data.data.sortedQuestion[0].text,
          question2: res.data.data.sortedQuestion[1].text,
          question3: res.data.data.sortedQuestion[2].text,
          question4: res.data.data.sortedQuestion[3].text,
          question5: res.data.data.sortedQuestion[4].text,
        });

        if (res.data.data.sortedOption.length > 0) {
          setOption1({
            text: res.data.data.sortedOption[0].text,
            value: res.data.data.sortedOption[0].value,
          });
          setOption2({
            text: res.data.data.sortedOption[1].text,
            value: res.data.data.sortedOption[1].value,
          });
          setOption3({
            text: res.data.data.sortedOption[2].text,
            value: res.data.data.sortedOption[2].value,
          });
          setOption4({
            text: res.data.data.sortedOption[3].text,
            value: res.data.data.sortedOption[3].value,
          });
          setOption5({
            text: res.data.data.sortedOption[4].text,
            value: res.data.data.sortedOption[4].value,
          });
        }
      });

    axios
      .get(
        `https://pms-jq9o.onrender.com/api/v1/question/getQuestions/${Cookies.get(
          'companyID'
        )}/360 Appraisal/Review`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then(res => {
        setAppraisalQuestions({
          question1: res.data.data.sortedQuestion[0].text,
          question2: res.data.data.sortedQuestion[1].text,
          question3: res.data.data.sortedQuestion[2].text,
          question4: res.data.data.sortedQuestion[3].text,
          question5: res.data.data.sortedQuestion[4].text,
        });

        if (res.data.data.sortedOption.length > 0) {
          setOption1({
            text: res.data.data.sortedOption[0].text,
            value: res.data.data.sortedOption[0].value,
          });
          setOption2({
            text: res.data.data.sortedOption[1].text,
            value: res.data.data.sortedOption[1].value,
          });
          setOption3({
            text: res.data.data.sortedOption[2].text,
            value: res.data.data.sortedOption[2].value,
          });
          setOption4({
            text: res.data.data.sortedOption[3].text,
            value: res.data.data.sortedOption[3].value,
          });
          setOption5({
            text: res.data.data.sortedOption[4].text,
            value: res.data.data.sortedOption[4].value,
          });
        }
      });

    axios
      .get(
        `https://pms-jq9o.onrender.com/api/v1/question/getQuestions/${Cookies.get(
          'companyID'
        )}/Self Appraisal/Review`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then(res => {
        setSelfQuestions({
          question1: res.data.data.sortedQuestion[0].text,
          question2: res.data.data.sortedQuestion[1].text,
          question3: res.data.data.sortedQuestion[2].text,
          question4: res.data.data.sortedQuestion[3].text,
          question5: res.data.data.sortedQuestion[4].text,
        });

        if (res.data.data.sortedOption.length > 0) {
          setOption1({
            text: res.data.data.sortedOption[0].text,
            value: res.data.data.sortedOption[0].value,
          });
          setOption2({
            text: res.data.data.sortedOption[1].text,
            value: res.data.data.sortedOption[1].value,
          });
          setOption3({
            text: res.data.data.sortedOption[2].text,
            value: res.data.data.sortedOption[2].value,
          });
          setOption4({
            text: res.data.data.sortedOption[3].text,
            value: res.data.data.sortedOption[3].value,
          });
          setOption5({
            text: res.data.data.sortedOption[4].text,
            value: res.data.data.sortedOption[4].value,
          });
        }
      });

    axios
      .get(
        `https://pms-jq9o.onrender.com/api/v1/question/getQuestions/${Cookies.get(
          'companyID'
        )}/Goal Review/Review`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then(res => {
        setGoalQuestions({
          question1: res.data.data.sortedQuestion[0].text,
          question2: res.data.data.sortedQuestion[1].text,
          question3: res.data.data.sortedQuestion[2].text,
          question4: res.data.data.sortedQuestion[3].text,
          question5: res.data.data.sortedQuestion[4].text,
        });

        if (res.data.data.sortedOption.length > 0) {
          setOption1({
            text: res.data.data.sortedOption[0].text,
            value: res.data.data.sortedOption[0].value,
          });
          setOption2({
            text: res.data.data.sortedOption[1].text,
            value: res.data.data.sortedOption[1].value,
          });
          setOption3({
            text: res.data.data.sortedOption[2].text,
            value: res.data.data.sortedOption[2].value,
          });
          setOption4({
            text: res.data.data.sortedOption[3].text,
            value: res.data.data.sortedOption[3].value,
          });
          setOption5({
            text: res.data.data.sortedOption[4].text,
            value: res.data.data.sortedOption[4].value,
          });
        }
      });

    axios
      .get(
        `https://pms-jq9o.onrender.com/api/v1/question/competencyQuestions/${Cookies.get(
          'companyID'
        )}/Competency`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then(res => {
        setCompetencyQuestions({
          question1: res.data.data.sortedQuestion[0].text,
          question2: res.data.data.sortedQuestion[1].text,
          question3: res.data.data.sortedQuestion[2].text,
          question4: res.data.data.sortedQuestion[3].text,
          question5: res.data.data.sortedQuestion[4].text,
        });

        if (res.data.data.sortedOption.length > 0) {
          setOption1({
            text: res.data.data.sortedOption[0].text,
            value: res.data.data.sortedOption[0].value,
          });
          setOption2({
            text: res.data.data.sortedOption[1].text,
            value: res.data.data.sortedOption[1].value,
          });
          setOption3({
            text: res.data.data.sortedOption[2].text,
            value: res.data.data.sortedOption[2].value,
          });
          setOption4({
            text: res.data.data.sortedOption[3].text,
            value: res.data.data.sortedOption[3].value,
          });
          setOption5({
            text: res.data.data.sortedOption[4].text,
            value: res.data.data.sortedOption[4].value,
          });
        }
      });
  }, []);

  const handleOptions = e => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .patch(
        `https://pms-jq9o.onrender.com/api/v1/question/setoptions/${Cookies.get(
          'companyID'
        )}`,
        {
          options: [
            {
              text: option1.text,
              value: option1.value,
            },
            {
              text: option2.text,
              value: option2.value,
            },
            {
              text: option3.text,
              value: option3.value,
            },
            {
              text: option4.text,
              value: option4.value,
            },
            {
              text: option5.text,
              value: option5.value,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('Token')}`,
          },
        }
      )
      .then(res => {
        toast.success('Options Saved Successfully');
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          'https://countriesnow.space/api/v0.1/countries'
        );

        setCountries(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchStates = async () => {
      try {
        setIsLoading(true);

        const response = await axios.post(
          'https://countriesnow.space/api/v0.1/countries/states',
          {
            country: conpanyFormData.country,
          }
        );
        setIsLoading(false);
        setStates(response.data.data.states);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
    if (conpanyFormData.country !== '') {
      fetchStates();
    }
  }, [conpanyFormData.country]);

  //

  // console.log(adminUser.data);
  return (
    <div className="home1">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="settingsHeading">
          <div className="settingsImgWrap">
            {uploading ? (
              <Avatar
                src={data.profilePhoto}
                alt={initials}
                color="blue"
                radius={100}
                size={150}
              >
                {initials}
              </Avatar>
            ) : (
              <Avatar
                src={profile}
                alt={initials}
                color="blue"
                radius={100}
                size={150}
              >
                {initials}
              </Avatar>
            )}
          </div>
          <div className="settingsNameWrap">
            <h1>{data?.companyName}</h1>
            <p>{data?.firstName + ' ' + data?.lastName} (Owner)</p>
          </div>
        </div>

        <div className="settingBottom">
          {/* Company Details Settings */}
          <div className="settingsContent">
            <div className="leftSettingsContent">
              <h2>Company Details</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                ea molestias repudiandae necessitatibus asperiores dolores
              </p>
            </div>

            <form onSubmit={submitCompanyDetails}>
              <div className="inputContainer">
                <div className="inputWrapper">
                  <label htmlFor="">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={conpanyFormData.companyName}
                    onChange={handleCompanyInputChange}
                    placeholder="Please Enter Your companyName"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="businessType">Business Type</label>
                  <select
                    name="businessType"
                    value={conpanyFormData.businessType}
                    onChange={handleCompanyInputChange}
                    id="businessType"
                  >
                    <option>--Select option--</option>
                    <option>Technology</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                    <option>Film and Entertainment</option>
                  </select>
                </div>
              </div>
              <div className="inputWrapper">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={conpanyFormData.address}
                  onChange={handleCompanyInputChange}
                  placeholder="Enter your Company Address"
                />
              </div>
              <div className="inputContainer">
                <div className="inputWrapper">
                  <label htmlFor="">Country</label>
                  <select
                    name="country"
                    id="country"
                    value={conpanyFormData.country}
                    onChange={handleCompanyInputChange}
                  >
                    <option value="">-- Select a country --</option>
                    {countries.map(country => (
                      <option
                        key={country.country_iso2}
                        value={country.country_iso2}
                      >
                        {country.country}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">State</label>
                  <select
                    name="state"
                    id="state"
                    value={conpanyFormData.state}
                    onChange={handleCompanyInputChange}
                  >
                    <option value="">-- Select a state --</option>
                    {isLoading && (
                      <option disabled>Fetching states, please wait...</option>
                    )}
                    {!isLoading &&
                      states.map(state => (
                        <option key={state.id} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              {/* <div className="inputWrapper">
                  <label htmlFor="">Address</label>
                  <input type="text" />
                </div> */}
              <div className="inputContainer">
                <div className="inputWrapper">
                  <label htmlFor="">Number of Employees</label>
                  <select
                    name="numOfEmployees"
                    value={conpanyFormData.numOfEmployees}
                    onChange={handleCompanyInputChange}
                    id="numOfEmployees"
                  >
                    <option value="">--Select options--</option>
                    <option value="0-10">0-10</option>
                    <option value="10-50">10-50</option>
                    <option value="50-100">50-100</option>
                    <option value="100 and above">100 and above</option>
                  </select>
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Reg. no</label>
                  <input
                    type="text"
                    name="companyRegNo"
                    id="companyRegNo"
                    value={conpanyFormData.companyRegNo}
                    onChange={handleCompanyInputChange}
                    placeholder="Enter your Registration Number"
                  />
                </div>
              </div>
              <div className="buttonWrapper">
                <button>Cancel</button>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>

          <div className="settingsContent">
            <div className="leftSettingsContent">
              <h2>Personal Info</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                ea molestias repudiandae necessitatibus asperiores dolores
              </p>
            </div>

            <form onSubmit={submitPersonalInfo}>
              <div className="inputWrapper">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={personalFormData.firstName}
                  onChange={handlePersonalInputChange}
                  placeholder="Please Enter Your Firstname"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={personalFormData.lastName}
                  onChange={handlePersonalInputChange}
                  placeholder="Please Enter Your Lastname"
                />
              </div>
              <div disabled className="inputWrapper">
                <label htmlFor="">Role</label>
                <input
                  type="text"
                  readOnly
                  name="role"
                  id="role"
                  value={personalFormData.role}
                  onChange={handlePersonalInputChange}
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="">Work Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={personalFormData.email}
                  onChange={handlePersonalInputChange}
                  placeholder="Please Enter Your Email"
                />
              </div>
              <div className="buttonWrapper">
                <button>Cancel</button>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>

          {/* Profile Photo Settings */}
          <div className="settingsContent">
            <div className="leftSettingsContent">
              <h2>Profile Photo Upload</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                ea molestias repudiandae necessitatibus asperiores dolores
              </p>
            </div>

            <form onSubmit={handleSubmitProfile}>
              <div className="inputWrapper">
                <label htmlFor="">Profile Picture</label>
                <span style={{ display: 'flex', placeItems: 'center' }}>
                  {profile ? (
                    <img
                      style={{
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                      }}
                      src={uploading ? URL.createObjectURL(profile) : profile}
                      alt="avatar"
                    />
                  ) : (
                    <RxAvatar
                      style={{
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                      }}
                    />
                  )}

                  <label style={{ marginLeft: '50px' }} htmlFor="image-upload">
                    <span
                      style={{
                        padding: '12px 40px',
                        backgroundColor: 'rgb(62, 69, 235)',
                        color: 'white',
                        borderRadius: '10px',
                      }}
                    >
                      Upload a file
                    </span>
                    <input
                      type="file"
                      name="profile"
                      id="image-upload"
                      className="sr-only"
                      onChange={handleImageUpload}
                    />
                  </label>
                </span>
              </div>
              <div className="buttonWrapper">
                <button>Cancel</button>
                <button type="submit">
                  {isLoading ? (
                    <>
                      <FaSpinner className="fa-spin" />
                      &nbsp;Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </form>
          </div>
          <div className="settingsContent">
            <div className="leftSettingsContent">
              <h2>Password</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                ea molestias repudiandae necessitatibus asperiores dolores
              </p>
            </div>

            <form onSubmit={submitPasswordChange}>
              <div className="inputWrapper">
                <label htmlFor="oldPassword">Old Password</label>
                <input
                  type="password"
                  name="oldPassword"
                  value={passwordData.oldPassword}
                  onChange={handlePasswordChange}
                  id="oldPassword"
                  placeholder="Please Enter Your oldPassword"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  name="password"
                  value={passwordData.password}
                  onChange={handlePasswordChange}
                  id="password"
                  placeholder="Please Enter Your password"
                />
              </div>
              <div className="buttonWrapper">
                <button>Cancel</button>
                <button type="submit">
                  {isLoading ? (
                    <>
                      <FaSpinner className="fa-spin" />
                      &nbsp;Saving...
                    </>
                  ) : (
                    'Save'
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="settingsContent">
            <div className="leftSettingsContent">
              <h2>Performance Review</h2>
              <p>
                Manage the performance review and appraisal of your employees by
                setting the required dates for each reviews
              </p>
            </div>

            <form onSubmit={submitPerformanceReview}>
              <h2>Mid-Year Review</h2>
              <div className="inputContainer">
                <div className="inputWrapper">
                  <label htmlFor="midYearStartDate">Start Date</label>
                  <input
                    type="datetime-local"
                    name="midYearStartDate"
                    value={performanceReviewData.midYearStartDate}
                    onChange={handlePerformanceReviewInputChange}
                    id="midYearStartDate"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="midYearEndDate">End Date</label>
                  <input
                    type="datetime-local"
                    name="midYearEndDate"
                    value={performanceReviewData.midYearEndDate}
                    onChange={handlePerformanceReviewInputChange}
                    id="midYearStartDate"
                  />
                </div>
              </div>

              <h2>Full-Year Review</h2>
              <div className="inputContainer">
                <div className="inputWrapper">
                  <label htmlFor="fullYearStartDate">Start Date</label>
                  <input
                    type="datetime-local"
                    name="fullYearStartDate"
                    value={performanceReviewData.fullYearStartDate}
                    onChange={handlePerformanceReviewInputChange}
                    id="fullYearStartDate"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="fullYearEndDate">End Date</label>
                  <input
                    type="datetime-local"
                    name="fullYearEndDate"
                    value={performanceReviewData.fullYearEndDate}
                    onChange={handlePerformanceReviewInputChange}
                    id="fullYearEndDate"
                  />
                </div>
              </div>

              <h2>360 Appraisal</h2>
              <div className="inputContainer">
                <div className="inputWrapper">
                  <label htmlFor="appraisalStartDate">Start Date</label>
                  <input
                    type="datetime-local"
                    name="appraisalStartDate"
                    value={conpanyFormData.appraisalStartDate}
                    onChange={handlePerformanceReviewInputChange}
                    id="appraisalStartDate"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="appraisalEndDate">End Date</label>
                  <input
                    type="datetime-local"
                    name="appraisalEndDate"
                    value={performanceReviewData.appraisalEndDate}
                    onChange={handlePerformanceReviewInputChange}
                    id="appraisalEndDate"
                  />
                </div>
              </div>

              <div className="buttonWrapper">
                <button>Cancel</button>
                <button type="submit">
                  {isLoading ? (
                    <>
                      <FaSpinner className="fa-spin" />
                      &nbsp;Saving...
                    </>
                  ) : (
                    'Save'
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="settingsContent">
            <div className="leftSettingsContent">
              <h2>Performance Review Questions</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus, aperiam.
              </p>
            </div>

            <form onSubmit={handlePerformanceQuestions}>
              <div className="inputWrapper">
                <label htmlFor="pquestion1">Question 1</label>
                <input
                  type="text"
                  value={performanceQuestions.question1}
                  onChange={e =>
                    setPerformanceQuestions({
                      ...performanceQuestions,
                      question1: e.target.value,
                    })
                  }
                  id="pquestion1"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="pquestion2">Question 2</label>
                <input
                  type="text"
                  value={performanceQuestions.question2}
                  onChange={e =>
                    setPerformanceQuestions({
                      ...performanceQuestions,
                      question2: e.target.value,
                    })
                  }
                  id="pquestion2"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="pquestion3">Question 3</label>
                <input
                  type="text"
                  value={performanceQuestions.question3}
                  onChange={e =>
                    setPerformanceQuestions({
                      ...performanceQuestions,
                      question3: e.target.value,
                    })
                  }
                  id="pquestion3"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="pquestion4">Question 4</label>
                <input
                  type="text"
                  value={performanceQuestions.question4}
                  onChange={e =>
                    setPerformanceQuestions({
                      ...performanceQuestions,
                      question4: e.target.value,
                    })
                  }
                  id="pquestion4"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="pquestion5">Question 5</label>
                <input
                  type="text"
                  value={performanceQuestions.question5}
                  onChange={e =>
                    setPerformanceQuestions({
                      ...performanceQuestions,
                      question5: e.target.value,
                    })
                  }
                  id="pquestion5"
                />
              </div>

              <div className="buttonWrapper">
                <button>Cancel</button>
                <button type="submit">
                  {isLoading ? (
                    <>
                      <FaSpinner className="fa-spin" />
                      &nbsp;Saving...
                    </>
                  ) : (
                    'Save'
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="settingsContent">
            <div className="leftSettingsContent">
              <h2>360 Appraisal Questions</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus, aperiam.
              </p>
            </div>

            <form onSubmit={handleAppraisalQuestons}>
              <div className="inputWrapper">
                <label htmlFor="appraisal1">Question 1</label>
                <input
                  type="text"
                  value={appraisalQuestions.question1}
                  onChange={e =>
                    setAppraisalQuestions({
                      ...appraisalQuestions,
                      question1: e.target.value,
                    })
                  }
                  id="appraisal1"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="appraisal2">Question 2</label>
                <input
                  type="text"
                  value={appraisalQuestions.question2}
                  onChange={e =>
                    setAppraisalQuestions({
                      ...appraisalQuestions,
                      question2: e.target.value,
                    })
                  }
                  id="appraisal2"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="appraisal3">Question 3</label>
                <input
                  type="text"
                  value={appraisalQuestions.question3}
                  onChange={e =>
                    setAppraisalQuestions({
                      ...appraisalQuestions,
                      question3: e.target.value,
                    })
                  }
                  id="appraisal3"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="appraisal4">Question 4</label>
                <input
                  type="text"
                  value={appraisalQuestions.question4}
                  onChange={e =>
                    setAppraisalQuestions({
                      ...appraisalQuestions,
                      question4: e.target.value,
                    })
                  }
                  id="appraisal4"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="appraisal5">Question 5</label>
                <input
                  type="text"
                  value={appraisalQuestions.question5}
                  onChange={e =>
                    setAppraisalQuestions({
                      ...appraisalQuestions,
                      question5: e.target.value,
                    })
                  }
                  id="appraisla5"
                />
              </div>

              <div className="buttonWrapper">
                <button>Cancel</button>
                <button type="submit">
                  {isLoading ? (
                    <>
                      <FaSpinner className="fa-spin" />
                      &nbsp;Saving...
                    </>
                  ) : (
                    'Save'
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="settingsContent">
            <div className="leftSettingsContent">
              <h2>Self Appraisal Questions</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus, aperiam.
              </p>
            </div>

            <form onSubmit={handleSelfQuestions}>
              <div className="inputWrapper">
                <label htmlFor="self1">Question 1</label>
                <input
                  type="text"
                  value={selfQuestions.question1}
                  onChange={e =>
                    setSelfQuestions({
                      ...selfQuestions,
                      question1: e.target.value,
                    })
                  }
                  id="self1"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="self2">Question 2</label>
                <input
                  type="text"
                  value={selfQuestions.question2}
                  onChange={e =>
                    setSelfQuestions({
                      ...selfQuestions,
                      question2: e.target.value,
                    })
                  }
                  id="self2"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="midYearStartDate">Question 3</label>
                <input
                  type="self3"
                  value={selfQuestions.question3}
                  onChange={e =>
                    setSelfQuestions({
                      ...selfQuestions,
                      question3: e.target.value,
                    })
                  }
                  id="self3"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="midYearStartDate">Question 4</label>
                <input
                  type="self4"
                  value={selfQuestions.question4}
                  onChange={e =>
                    setSelfQuestions({
                      ...selfQuestions,
                      question4: e.target.value,
                    })
                  }
                  id="self4"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="midYearStartDate">Question 5</label>
                <input
                  type="self5"
                  value={selfQuestions.question5}
                  onChange={e =>
                    setSelfQuestions({
                      ...selfQuestions,
                      question5: e.target.value,
                    })
                  }
                  id="self5"
                />
              </div>

              <div className="buttonWrapper">
                <button>Cancel</button>
                <button type="submit">
                  {isLoading ? (
                    <>
                      <FaSpinner className="fa-spin" />
                      &nbsp;Saving...
                    </>
                  ) : (
                    'Save'
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="settingsContent">
            <div className="leftSettingsContent">
              <h2>Goal Review Questions</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus, aperiam.
              </p>
            </div>

            <form onSubmit={handleGoalQuestions}>
              <div className="inputWrapper">
                <label htmlFor="goal1">Question 1</label>
                <input
                  type="text"
                  value={goalQuestions.question1}
                  onChange={e =>
                    setGoalQuestions({
                      ...goalQuestions,
                      question1: e.target.value,
                    })
                  }
                  id="goal1"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="goal2">Question 2</label>
                <input
                  type="text"
                  value={goalQuestions.question2}
                  onChange={e =>
                    setGoalQuestions({
                      ...goalQuestions,
                      question2: e.target.value,
                    })
                  }
                  id="goal2"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="goal3">Question 3</label>
                <input
                  type="text"
                  value={goalQuestions.question3}
                  onChange={e =>
                    setGoalQuestions({
                      ...goalQuestions,
                      question3: e.target.value,
                    })
                  }
                  id="goal3"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="goal4">Question 4</label>
                <input
                  type="text"
                  value={goalQuestions.question4}
                  onChange={e =>
                    setGoalQuestions({
                      ...goalQuestions,
                      question4: e.target.value,
                    })
                  }
                  id="goal4"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="goal5">Question 5</label>
                <input
                  type="text"
                  value={goalQuestions.question5}
                  onChange={e =>
                    setGoalQuestions({
                      ...goalQuestions,
                      question5: e.target.value,
                    })
                  }
                  id="goal5"
                />
              </div>

              <div className="buttonWrapper">
                <button>Cancel</button>
                <button type="submit">
                  {isLoading ? (
                    <>
                      <FaSpinner className="fa-spin" />
                      &nbsp;Saving...
                    </>
                  ) : (
                    'Save'
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="settingsContent">
            <div className="leftSettingsContent">
              <h2>Competency Questions</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus, aperiam.
              </p>
            </div>

            <form onSubmit={handleCompetencyQuestions}>
              <div className="inputWrapper">
                <label htmlFor="comp1">Question 1</label>
                <input
                  type="text"
                  value={competencyQuestions.question1}
                  onChange={e =>
                    setCompetencyQuestions({
                      ...competencyQuestions,
                      question1: e.target.value,
                    })
                  }
                  id="comp1"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="comp2">Question 2</label>
                <input
                  type="text"
                  value={competencyQuestions.question2}
                  onChange={e =>
                    setCompetencyQuestions({
                      ...competencyQuestions,
                      question2: e.target.value,
                    })
                  }
                  id="comp2"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="comp3">Question 3</label>
                <input
                  type="text"
                  value={competencyQuestions.question3}
                  onChange={e =>
                    setCompetencyQuestions({
                      ...competencyQuestions,
                      question3: e.target.value,
                    })
                  }
                  id="comp3"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="comp4">Question 4</label>
                <input
                  type="text"
                  value={competencyQuestions.question4}
                  onChange={e =>
                    setCompetencyQuestions({
                      ...competencyQuestions,
                      question4: e.target.value,
                    })
                  }
                  id="comp4"
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="comp5">Question 5</label>
                <input
                  type="text"
                  value={competencyQuestions.question5}
                  onChange={e =>
                    setCompetencyQuestions({
                      ...competencyQuestions,
                      question5: e.target.value,
                    })
                  }
                  id="comp5"
                />
              </div>

              <div className="buttonWrapper">
                <button>Cancel</button>
                <button type="submit">
                  {isLoading ? (
                    <>
                      <FaSpinner className="fa-spin" />
                      &nbsp;Saving...
                    </>
                  ) : (
                    'Save'
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="settingsContent">
            <div className="leftSettingsContent">
              <h2>Options</h2>
              <p>
                Manage the performance review and appraisal of your employees by
                setting the required dates for each reviews
              </p>
            </div>

            <form onSubmit={handleOptions}>
              <div className="inputContainer">
                <div className="inputWrapper">
                  <label htmlFor="option1q">Option 1</label>
                  <input
                    type="text"
                    value={option1.text}
                    onChange={e =>
                      setOption1({ ...option1, text: e.target.value })
                    }
                    id="option1q"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="option1">Value</label>
                  <select
                    name=""
                    id="option1"
                    value={option1.value}
                    onChange={e =>
                      setOption1({ ...option1, value: e.target.value })
                    }
                  >
                    <option value="">--Select--</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputWrapper">
                  <label htmlFor="option2q">Option 2</label>
                  <input
                    type="text"
                    value={option2.text}
                    onChange={e =>
                      setOption2({ ...option2, text: e.target.value })
                    }
                    id="option2q"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="option2">Value</label>
                  <select
                    name=""
                    id="option2"
                    value={option2.value}
                    onChange={e =>
                      setOption2({ ...option2, value: e.target.value })
                    }
                  >
                    <option value="">--Select--</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputWrapper">
                  <label htmlFor="option3q">Option 3</label>
                  <input
                    type="text"
                    value={option3.text}
                    onChange={e =>
                      setOption3({ ...option3, text: e.target.value })
                    }
                    id="option3q"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="option3">Value</label>
                  <select
                    name=""
                    id="option3"
                    value={option3.value}
                    onChange={e =>
                      setOption3({ ...option3, value: e.target.value })
                    }
                  >
                    <option value="">--Select--</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputWrapper">
                  <label htmlFor="option4q">Option 4</label>
                  <input
                    type="text"
                    value={option4.text}
                    onChange={e =>
                      setOption4({ ...option4, text: e.target.value })
                    }
                    id="option4q"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="option4">Value</label>
                  <select
                    name=""
                    id="option4"
                    value={option4.value}
                    onChange={e =>
                      setOption4({ ...option4, value: e.target.value })
                    }
                  >
                    <option value="">--Select--</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
              <div className="inputContainer">
                <div className="inputWrapper">
                  <label htmlFor="option5q">Option 5</label>
                  <input
                    type="text"
                    name="option5q"
                    value={option5.text}
                    onChange={e =>
                      setOption5({ ...option5, text: e.target.value })
                    }
                    id="midYearStartDate"
                  />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="option5">Value</label>
                  <select
                    name=""
                    id="option5"
                    value={option5.value}
                    onChange={e =>
                      setOption5({ ...option5, value: e.target.value })
                    }
                  >
                    <option value="">--Select--</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>

              <div className="buttonWrapper">
                <button>Cancel</button>
                <button type="submit">
                  {isLoading ? (
                    <>
                      <FaSpinner className="fa-spin" />
                      &nbsp;Saving...
                    </>
                  ) : (
                    'Save'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
