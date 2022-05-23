import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const AppointmentModal = ({ triment, date }) => {
    const { name, slots } = triment;
    const [user, loading, error] = useAuthState(auth)
    

    return (
        <div>
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label for="appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center text-primary">{name}!</h3>
                    <form >
                        <input className='bg-neutral w-full p-2 mt-5 rounded text-white text-xl' disabled value={name} type="text" name="Full Name " id="" />
                        <input className='bg-neutral w-full p-2 mt-5 rounded text-white text-xl' disabled value={format(date, 'PP')} type="text" name="Full Name " id="" />
                        <select className="select select-bordered bg-neutral w-full p-2 mt-5 rounded text-white text-xl">
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }

                        </select>
                        <input className='bg-neutral w-full p-2 mt-5 rounded text-white text-xl' placeholder='Full Name' disabled value={user.displayName} type="text" name="Full Name " id="" />
                        <input className='bg-accent w-full p-2 mt-5 rounded text-white text-xl'  placeholder='Phone Number' type="text" name="Phone Number  " id="" />
                        <input className='bg-accent w-full p-2 mt-5 rounded  text-white text-xl' disabled placeholder='Email' value={user.email} type="email" name="Email  " id="" />
                        <input className='bg-secondary w-full p-2 mt-5 rounded text-white text-xl' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;