import Sidebar from './sideBar';
import Navbar from './navBar';
// import { ArrowSwapHorizontal, Wallet1, ColorsSquare, CopySuccess} from 'react-icons';

const Wallet = () => {
  return (
    <div className="wallet">
      <div className="modal_container">
        <div className="modal_content">
          <div className="modal_header">
            <div className="profile_container">
              <img src="" alt="" />
              <h5>Christian Apithy</h5>
            </div>

            <button className="close">
                {/* <ColorsSquare /> */}
            </button>
          </div>

          <div className="stepper_container">
            <button className='active'>Send</button>
            <div className="stepper_arrow"></div>
            <button>Confirm</button>
          </div>

          <div className="exchange_icon">
            {/* <ArrowSwapHorizontal /> */}
          </div>

          <div className="form_container">
            <div className="form_content">
              <label>Recipient’s ID</label>
              <input type="text" placeholder='Wallet ID' />
            </div>

             <div className="form_content">
              <label>Currency</label>
              <input type="text" placeholder='USDT' />
            </div>

            <div className="form_content">
              <label>Amount</label>
              <input type="text" placeholder='Enter Amount' />
            </div>

            <button>Continue</button>
          </div>
        </div>

        <div className="modal_content">
          <div className="modal_header">
            <div className="profile_container">
              <img src="" alt="" />
              <h5>Christian Apithy</h5>
            </div>

            <button className="close">
                {/* <ColorsSquare /> */}
            </button>
          </div>

          <div className="stepper_container">
            <button className='active'>Confirm</button>
          </div>


          <div className="form_container">
            <div className="form_content">
              <label>Wallet ID</label>
              <input type="text" placeholder='Wallet ID' />
            </div>

             <div className="form_content">
              <label>Name</label>
              <input type="text" placeholder='USDT' />
            </div>

            <div className="form_content">
              <label>Amount</label>
              <input type="text" placeholder='Enter Amount' />
            </div>

            <button>Send now</button>
            <button className="empty">Cancel</button>
          </div>
        </div>

        <div className="success_screen">
        {/* <CopySuccess
          size="85"
          color = "#3e45eb"
          /> */}
          <h4>Transaction successfully</h4>
        </div>


      </div>
      <Sidebar />
      <div className="walletContainer">
        <Navbar />

        <div className="transaction_container">
          <div className="balance_container">
            <div className="balance_text">
              Current Balance
              <h1>223,345.00</h1>
            </div>
          </div>
          <h2>Transaction History</h2>
          <div className="table_container">
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className="content">
                      <div className="icon_container sent">
                        {/* <ArrowSwapHorizontal size={18} /> */}
                      </div>
                      <div className="text">
                        <h4>Sent to kemik@gma...</h4>
                        <p>March 6, 2023. 2:30 AM</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="amount red">-90.45.00 USD</p>
                  </td>
                  <td>
                    <p className="status red">Pending</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="content">
                      <div className="icon_container received">
                        {/* <Wallet1 size={18} /> */}
                      </div>
                      <div className="text">
                        <h4>Sent to kemik@gma...</h4>
                        <p>March 6, 2023. 2:30 AM</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="amount green">+90.45.00 USD</p>
                  </td>
                  <td>
                    <p className="status green">Successful</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="content">
                      <div className="icon_container sent">
                        {/* <ArrowSwapHorizontal size={18} /> */}
                      </div>
                      <div className="text">
                        <h4>Sent to kemik@gma...</h4>
                        <p>March 6, 2023. 2:30 AM</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="amount red">-223,345.00</p>
                  </td>
                  <td>
                    <p className="status blue">Cancelled</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="content">
                      <div className="icon_container sent">
                        {/* <ArrowSwapHorizontal size={18} /> */}
                      </div>
                      <div className="text">
                        <h4>Sent to kemik@gma...</h4>
                        <p>March 6, 2023. 2:30 AM</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="amount green">-223,345.00</p>
                  </td>
                  <td>
                    <p className="status red">Successful</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="content">
                      <div className="icon_container received">
                        {/* <Wallet1 size={18} /> */}
                      </div>
                      <div className="text">
                        <h4>Sent to kemik@gma...</h4>
                        <p>March 6, 2023. 2:30 AM</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="amount red">-223,345.00</p>
                  </td>
                  <td>
                    <p className="status green">Successful</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="view_all_transaction_tab">
              <p>View all Transactions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
