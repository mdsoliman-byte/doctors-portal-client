import React from 'react';

const AppointmentModal = ({ triment }) => {
    const { name, slots } = triment
    return (
        <div>
            <input type="checkbox" id="appointment-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="appointment-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold text-center text-primary">{name}!</h3>
                    <form >
                        <input className='bg-neutral w-full p-2 mt-5 rounded text-white text-xl' disabled value={name} type="text" name="Full Name " id="" />
                        <select class="select select-bordered w-full bg-neutral w-full p-2 mt-5 rounded text-white text-xl">
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }

                        </select>
                        <input className='bg-neutral w-full p-2 mt-5 rounded text-white text-xl' placeholder='Full Name' type="text" name="Full Name " id="" />
                        <input className='bg-accent w-full p-2 mt-5 rounded text-white text-xl' placeholder='Phone Number' type="text" name="Phone Number  " id="" />
                        <input className='bg-accent w-full p-2 mt-5 rounded text-white text-xl' placeholder='Email' type="email" name="Email  " id="" />
                        <input className='bg-secondary w-full p-2 mt-5 rounded text-white text-xl' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;