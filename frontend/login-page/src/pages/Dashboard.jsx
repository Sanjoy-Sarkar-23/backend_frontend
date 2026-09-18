import "../App.css";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Alogyan</h2>

        <nav>
          <a className="active" href="#">
            🏠 Dashboard
          </a>

          <a href="#">
            👤 Users
          </a>

          <a href="#">
            📊 Analytics
          </a>

          <a href="#">
            📦 Products
          </a>

          <a href="#">
            ⚙️ Settings
          </a>
        </nav>

        <button className="logout">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="main">

        {/* Header */}
        <header className="header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back! Here's what's happening today.</p>
          </div>

          <div className="profile">
            <div className="avatar">A</div>
            <div>
              <strong>Admin</strong>
              <small>Administrator</small>
            </div>
          </div>
        </header>

        {/* Cards */}
        <section className="cards">

          <div className="card">
            <div className="card-icon">👥</div>
            <p>Total Users</p>
            <h2>1,245</h2>
            <span>+12% this month</span>
          </div>

          <div className="card">
            <div className="card-icon">💰</div>
            <p>Total Revenue</p>
            <h2>₹85,420</h2>
            <span>+8% this month</span>
          </div>

          <div className="card">
            <div className="card-icon">📦</div>
            <p>Total Orders</p>
            <h2>324</h2>
            <span>+5% this month</span>
          </div>

          <div className="card">
            <div className="card-icon">📈</div>
            <p>Growth</p>
            <h2>24.5%</h2>
            <span>+3.2% this month</span>
          </div>

        </section>

        {/* Recent Activity */}
        <section className="activity">

          <div className="section-header">
            <h2>Recent Activity</h2>
            <button>View All</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Activity</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul</td>
                <td>New Order</td>
                <td>18 Sep 2026</td>
                <td>
                  <span className="status success">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>Ankit</td>
                <td>Account Created</td>
                <td>18 Sep 2026</td>
                <td>
                  <span className="status success">
                    Active
                  </span>
                </td>
              </tr>

              <tr>
                <td>Priya</td>
                <td>Payment</td>
                <td>17 Sep 2026</td>
                <td>
                  <span className="status pending">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>Riya</td>
                <td>New Order</td>
                <td>17 Sep 2026</td>
                <td>
                  <span className="status success">
                    Completed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;