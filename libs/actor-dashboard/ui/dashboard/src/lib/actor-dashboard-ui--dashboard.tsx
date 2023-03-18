import styles from './actor-dashboard-ui--dashboard.module.css';

/* eslint-disable-next-line */
export interface ActorDashboardUiDashboardProps {}

const actors = [
  { name: 'gdrive', path: '/system/watchers/gdrive', role: 'filewatcher', status: 'running' },
  // More actors...
]

export function ActorDashboardUiDashboard(
  props: ActorDashboardUiDashboardProps
) {
  return (

    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <br/>
<div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Actors</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the actors responding to the broadcast query.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Poll Actors
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Path
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Role
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {actors.map((actor) => (
                    <tr key={actor.path}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {actor.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{actor.path}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{actor.role}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{actor.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default ActorDashboardUiDashboard;
