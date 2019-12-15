<?php
/* 
 * Generated by CRUDigniter v3.2 
 * www.crudigniter.com
 */

class Master extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }
    //THE MASTER OF THE MASTER
    /*
     * Get allowed_payment by id
     */
    public function get($tabel, $where,$select='',$all=false)
    {

        if ($select !='') {
            $this->db->select($select);
        }
        if ($all) {
            $run = $this->db->get_where($tabel, $where)->result_array();
        }else{
            $run = $this->db->get_where($tabel, $where)->row_array();
        }
        $res = array();
        // var_dump(empty($run));
        if (empty($run)) {
            $res['data']['message'] = 'data not exist ->tabel_'.$tabel;
            $res['status'] = false;
        } else {
            $res['data'] = $run;
            $res['status'] = true;
        }
        return $res;
    }
    
    public function get_select($tabel, $select, $where)
    {
        $this->db->select($select);
        $run = $this->db->get_where($tabel, $where)->row_array();
        $res = array();
        // var_dump(($run));
        if (!isset($run)) {
            $res['data']['message'] = 'data not exist';
            $res['status'] = false;
        } else {
            $res['data'] = $run;
            $res['status'] = true;
        }
        return $res;
    }

    /*
     * Get all allowed_payment
     */
    public function get_all($tabel, $where = '',$order='',$select='',$like='',$array=TRUE,$group='')
    {
        // array('create_at','DESC')
        if ($where != '') {
            $this->db->where($where);
        }
        if ($select !='') {
            $this->db->select($select);
        }
        if ($like !='') {
            $this->db->like($like);
        }

        if ($group !='') {
            $this->db->group_by($group);
        }
        if ($order !='') {
            $this->db->order_by($order[0], $order[1]);
        }
        if ($array) {
            return $this->db->get($tabel)->result_array();
        }else{
            return $this->db->get($tabel)->row_array();
        }
    }
    

    /*
     * public function untuk add new allowed_payment
     */
    public function add($tabel, $data)
    {

        $this->db->insert($tabel, $data);
        $res = array();
        if (!($this->db->affected_rows() >0)) {
            $res['data'] = $this->db->error();
            $res['status'] = false;
        } else {
            $res['data'] = array('id' => $this->db->insert_id());
            $res['status'] = true;
        }
        return $res;
    }
    public function insert_batch($tabel, $data)
    {

        $this->db->insert_batch($tabel, $data);
        $res = array();
        if (!($this->db->affected_rows() >0)) {
            $res['data'] = $this->db->error();
            $res['status'] = false;
        } else {
            $res['data'] = array('id' => $this->db->insert_id());
            $res['status'] = true;
        }
        return $res;
    }

    /*
     * public function untuk update allowed_payment
     */
    public function update($tabel, $where, $data)
    {
        $count = $this->db->get_where($tabel, $where)->row_array();
        $res = array();
        if (isset($count['id'])) {
            $this->db->where($where);
            $this->db->update($tabel, $data);
            if ($this->db->affected_rows() < 1) {
                $res['data'] = $this->db->error();
                $res['status'] = false;
            } else {
                $res['data'] = '';
                $res['status'] = true;
            }
        } else {
            $res['data']['message']= 'data not exist';
            $res['status'] = false;
        }

        return $res;
    }

    /*
     * public function untuk delete allowed_payment
     */
    public function delete($tabel, $where,$c='id')
    {
        $count = $this->db->get_where($tabel, $where)->row_array();
        $res = array();
        if (isset($count[$c])) {
            $this->db->delete($tabel, $where);
            if (!($this->db->affected_rows() >0) ) {
                $res['data'] = $this->db->error();
                $res['status'] = false;
            } else {
                $res['data'] = $this->db->insert_id();
                $res['status'] = true;
            }
        } else {
            $res['data']['message'] = 'data not exist';
            $res['status'] = false;
        }

        return $res;
    }


}
